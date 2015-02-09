/**
 * Copyright 2015 Alan Drees
 *
 * Purpose:
 *   Javascript implementation for the mediadoc test application
 *
 * Dependencies:
 *   AD ajax lib
 */

var MDT = MDT || {};

/**\fn MDT.Colour
 *
 * Object constructor for the Colour object
 *
 * @param name (string) colour name
 * @param renderer (function) renderer function
 *
 * Object representing a colour and it's data
 */

MDT.Colour = function(name, renderer)
{
    this._colour_name = name;
    this._votes = [];
    this._votes_retrieved = false;

    if(typeof renderer !== 'function')
    {
	this.renderer = function(){console.log("Renderer not Assigned.  Nothing rendered.");}
    }
    else
    {
	this.renderer = renderer;
    }
}


/**\fn MDT.Colour.prototype.sum
 *
 * Sum the color's votes
 *
 * @param None
 *
 * @returns (integer) summation of the votes from each city for the colour
 */

MDT.Colour.prototype.sum = function()
{
    var votes = 0;

    if(this._votes_retrieved === false)
    {
	this._get_votes();
    }

    for(var x = 0; x < this._votes.length; x++)
    {
	votes += this._votes[x].votes;
    }

    return votes;
}


/**\fn MDT.Colour.prototype._get_votes
 *
 * Gets the votes for the object's colour
 *
 * @param None
 *
 * @returns None
 */

MDT.Colour.prototype._get_votes = function()
{
    var self = this;

    this._votes = [];

    AD.AjaxAPI.ajax_api_call('/ajax.php',
			     'get_votes',
			     "colour=" + this._colour_name,
			     function(data)
			     {
				 for(var i = 0; i < data.json.votes.length; i++)
				 {
				     self._push(data.json.votes[i]);
				 }

				 self._votes_retrieved = true;
			     },
			     undefined,
			     function(data)
			     {
				 console.log(data);
			     },
			     false
			    );
}


/**\fn MDT.Colour.prototype._push
 *
 * Pushes another vote object onto the vote list
 *
 * @param votes (object) vote object
 *
 * @returns None
 */

MDT.Colour.prototype._push = function(votes)
{
    this._votes.push(votes);
}


/**\fn MDT.Colour.prototype.set_renderer
 *
 * Assigns a renderer for the colour object
 *
 * @param renderfunc (function) renderer function
 *
 * @returns None
 */

MDT.Colour.prototype._set_renderer = function(renderfunc)
{
    if(typeof renderfunc === 'function')
    {
	this.renderer = renderfunc;
    }
    else
    {
	console.log("Not a function.");
    }
}
