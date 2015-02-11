/**
 * Copyright 2015 Alan Drees
 *
 * Purpose:
 *   Javascript implementation for the mediadoc test application
 *
 * Dependencies:
 *   jQuery
 *   jQueryUI
 *   AD ajax lib
 */

var MDT = MDT || {};

if(typeof MDT !== 'undefined')
{
    MDT.colours = {};

    MDT.target = "votes-output";
}

/**\fn MDT.populate_color_list
 *
 * Populates the javascript internal structure
 *
 * @param data (object) data object generated by
 *
 * @returns None
 */

MDT.populate_color_list = function()
{
    AD.AjaxAPI.ajax_api_call('/ajax.php',
			                    'get_colour_list',
			                    '',
			                    function(data)
			                    {
				                     var colour = "";

				                     for(var i = 0; i < data.json.colours.length; i++)
				                     {
				                         colour = data.json.colours[i];
				                         MDT.colours[colour] = new MDT.Colour(colour, MDT.colour_renderer);
				                     }

				                     MDT.colours['Total'] = new MDT.Total(MDT.colours, MDT.colour_renderer);

				                     MDT.colours['Total'].set_sum_type(MDT.total_type);

				                     MDT.build_color_table();
			                    },
			                    undefined,
			                    function(data)
			                    {
				                     console.log(data);
			                    }
			                   );
}


/**\fn MDT.colour_renderer
 *
 * Renders the MDT.Colour object into it's controller
 *
 * @param None
 *
 * @returns None
 */

MDT.colour_renderer = function()
{
    var colour_name = "";

    var self = this;

    if(this instanceof MDT.Colour || this instanceof MDT.Total)
    {
	     colour_name = this._colour_name;
    }
    else
    {
	     console.log("Not an MDT.Colour object");
	     return;
    }

    var element = $("<div>");

    element.addClass(colour_name);
    element.addClass('colour-row');

    var anchor_div = $("<div>")
    anchor_div.addClass('colour-anchor-div');

    var anchor = $("<a>");
    anchor.addClass("colour-anchor");
    anchor.prop('href', '');
    anchor.on('click', function(){MDT.print_sum.call(self);return false;})
    anchor.text(colour_name);

    anchor_div.append(anchor);
    element.append(anchor_div);

    sum = $("<div>")
    sum.addClass("vote-sum");

    element.append(sum);
    element.append($("<div style='clear: both;'>"));

    $("#" + MDT.target).append(element);
}


/**\fn MDT.print_sum
 *
 * Prints the sum for a given colour
 *
 * @param colour (object) colour object
 *
 * @returns None
 */

MDT.print_sum = function()
{
    var colour_name;

    if(this instanceof MDT.Colour || this instanceof MDT.Total)
    {
	     colour_name = this._colour_name;
    }
    else
    {
	     console.log("Not an MDT.Colour object");
	     return;
    }

    var sum = this.sum();

    $("." + colour_name).find(".vote-sum").text(sum.toLocaleString());
}



/**\fn MDT.build_color_table
 *
 * Builds the colour table
 *
 * @param None
 *
 * @returns None
 */

MDT.build_color_table = function()
{
    for(var x in MDT.colours)
    {
	if(typeof MDT.colours[x].renderer === 'function')
	{
	    MDT.colours[x].renderer();
	}
	else
	{
	    console.log(x + " color object's renderer not a function.");
	}
    }
}


/**\fn MDT.onready_func
 *
 * Function to be executed when the onready
 *
 * @param None
 *
 * @returns None
 */

MDT.onready_func = function()
{
    MDT.populate_color_list();
}


/***************/
/* Entry Point */
/***************/

$(document).ready(MDT.onready_func);
