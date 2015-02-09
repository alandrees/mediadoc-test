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

    //what type of database backend will we be using
    public static $servertype = 'sqlite';

    //defines the server, or if using sqlite, the file
    public static $server = "/var/www/html/media-doc-test";

    //server username [MYSQL ONLY]
    public static $username = "";

    //server password [MYSQL ONLY]
    public static $password = "";

    //database
    public static $database = "";
}
?>