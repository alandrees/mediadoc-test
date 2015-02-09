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
