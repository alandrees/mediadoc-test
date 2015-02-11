<?php
/**
 * Copyright 2015 Alan Drees
 *
 * Purpose:
 *   Implements a configuration class for the MediaDoc Test application
 *
 * Requires:
 *   None
 *
 * Dependencies:
 *   None
 *
 */


final class MDT_Config
{
    const DATABASE_TOTAL = 0;
    const ACQUIRED_TOTAL = 1;


    //what type of database backend will we be using
    public static $servertype = 'sqlite';

    //defines the server, or if using sqlite, the file
    public static $server = __DIR__."/media-doc-test";

    //server username [MYSQL ONLY]
    public static $username = "";

    //server password [MYSQL ONLY]
    public static $password = "";

    //database
    public static $database = "";

    //total_mode
    /* If total mode is set to DATABASE_TOTAL when
       calculating the total, it will get the numbers
       for each colour from the database.  If set to
       ACQUIRED_TOTAL, it will only sum the values
       already retrieved from the database
    */
    public static $total_type = MDT_Config::ACQUIRED_TOTAL;
}
?>