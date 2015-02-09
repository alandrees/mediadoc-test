<?php
/**
 * Copyright 2015 Alan Drees
 *
 * Purpose:
 *   AJAX backend for accessing the database layer
 *
 * Requires:
 *   /config.php
 *   /lib.php
 *
 * Dependencies:
 *
 */

require_once(__DIR__.'/config.php');
require_once(__DIR__.'/lib.php');
require_once(__DIR__.'/ajax_functions.php');

/****************/
/* Sanitization */
/****************/

array_walk_recursive($_GET, function(&$val, $index){ $val = strip_tags($val); });

array_walk_recursive($_POST, function(&$val, $index){ $val = strip_tags($val); });

array_walk_recursive($_COOKIE, function(&$val, $index){ $val = strip_tags($val); });

array_walk_recursive($_REQUEST, function(&$val, $index){ $val = strip_tags($val); });

/******************/
/* AJAX Functions */
/******************/

/**\fn get_colour_list
 *
 * Retrives a colour list from the database
 *
 * @param None
 *
 * @returns json set to a list of colours from the database
 */

if(isset($_GET['get_colour_list']))
{
   header('Content-Type: application/json');

   $colour_list = array();

   $colour_list = get_colour_list();

   echo output_ajax_data(array("colours" => $colour_list));

   exit;
}


/**\fn get_votes
 *
 * Gets the votes for a given colour
 *
 * @param colour (string) colour to get the vote objects for
 *
 * @returns json set to an array of vote objects
 */

if(isset($_GET['get_votes']))
{
   header('Content-Type: application/json');

   $votes = array();

   if(isset($_POST['colour']))
   {
       $votes = get_colour_votes($_POST['colour']);

       for($i = 0; $i < count($votes); $i++)
       {
          $votes[$i]['votes'] = (integer)$votes[$i]['votes'];
       }

       echo output_ajax_data(array('votes' => $votes));
       exit;
   }
   else
   {
       echo output_ajax_data('', '', 1, "Missing required parameter: colour");
       exit;
   }
}
?>