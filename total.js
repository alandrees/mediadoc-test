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

    if(typeof renderer !== 'function')
    {
	this.renderer = function(){console.log("Renderer not Assigned.  Nothing rendered.");}
    }
    else
    {
	this.renderer = renderer;
    }
}
