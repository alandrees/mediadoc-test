<?php
/**
 * Copyright 2015 Alan Drees
 *
 * Purpose:
 *   Library functions for handling the acquisition of data from the database
 *
 * Requires:
 *   /config.php
 *
 * Dependencies:
 *
 */

require_once(__DIR__.'/config.php');


/*************/
/* FUNCTIONS */
/*************/

/**\fn get_colour_list
 *
 * Retrives a colour list from the database
 *
 * @param None
 *
 * @returns (array) list of colours
 */

function get_colour_list()
{
    $colours = array();

    if(MDT_Config::$servertype === 'sqlite')
    {
       $db = new PDO('sqlite:'.MDT_Config::$server);
    }
    else
    {
        $db = new PDO('mysql:host='.MDT_Config::$server.';',
                      MDT_Config::$username,
                      MDT_Config::$password,
                      array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                            PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
    }

    $query =
        "SELECT ".
        "   * ".
        "FROM ".
        MDT_Config::$database.(MDT_Config::$database !== '' ? "." : "")."Colours ";

    $colour_select_statement = $db->prepare($query);

    $colour_select_statement->execute();

    while($row = $colour_select_statement->fetch(PDO::FETCH_ASSOC))
    {
        array_push($colours, $row['colour']);
    }

    $colour_select_statement = null;

    $db = null;

    return $colours;
}
?>