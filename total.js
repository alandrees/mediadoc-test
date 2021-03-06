/**
 * Copyright 2015 Alan Drees
 *
 * Purpose:
 *  Javascript implementation for the mediadoc test application
 *
 * Dependencies:
 *  None
 */

var MDT = MDT || {};

/**\fn MDT.Total
 *
 * Constructor for the total object
 *
 * @param colour_list (array) list of colour objects
 * @param renderer (function) renderer function
 *
 * @returns None
 */

MDT.Total = function(colour_list, renderer)
{
    this._colour_name = 'Total';

    if(typeof colour_list === 'object')
    {
	     this._colour_list = colour_list
    }
    else
    {
	     this._colour_list = [];
    }

    //this._votes is now an integer
    this._votes = 0;

    //this._votes_calculated now determines if there is
    this._votes_calculated = false;

    //set the sum type to DATABASE_TOTAL by default
    this._sum_type = MDT.Total.total_types.DATABASE_TOTAL;

    if(typeof renderer !== 'function')
    {
	this.renderer = function(){MDT.log("Renderer not Assigned.  Nothing rendered.");}
    }
    else
    {
	this.renderer = renderer;
    }
}

MDT.Total.total_types = {'DATABASE_TOTAL' : 0,
                         'ACQUIRED_TOTAL' : 1};


/**\fn MDT.Total.prototype.sum
 *
 * Sums all the colour object votes
 *
 * @param None
 *
 * @returns (integer) summation of all the votes for every colour
 */

MDT.Total.prototype.sum = function()
{
    var i = "";

    this._votes = 0;

    for(i in this._colour_list)
    {
	     if(this._colour_list[i] instanceof MDT.Colour)
	     {

            switch(this._sum_type)
            {
            case MDT.Total.total_types.DATABASE_TOTAL:
                this._votes += this._colour_list[i].sum();
                break;
            case MDT.Total.total_types.ACQUIRED_TOTAL:
                if(this._colour_list[i].votes_retrieved())
                {
                    this._votes += this._colour_list[i].sum();
                }
                break;
            }
	     }
    }

    this._votes_calculated = true;

    return this._votes;
}


/**\fn MDT.Total.prototype.set_sum_type
 *
 * Sets the type of sum calculation to be executed
 *
 * @param new_sum_type (integer) sum type to be set
 *
 * @returns None
 */

MDT.Total.prototype.set_sum_type = function(new_sum_type)
{
    this._sum_type = new_sum_type;
}
