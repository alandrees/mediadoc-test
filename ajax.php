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


?>