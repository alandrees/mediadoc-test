<?php
/**
 * Copyright 2015 Alan Drees
 *
 * Purpose:
 *   Entry point for the Media-Doc Test
 *
 * Requires:
 *   /config.php
 *   /lib.php
 *
 * Dependencies:
 */

require_once(__DIR__."/config.php");
require_once(__DIR__."/lib.php");
?>

<!doctype html>
<html>
  <head>
    <title>
      MEDIADOC PHP MVC/OOP Coding Test
    </title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script src="/script.js"></script>
    <script src="/ajax_api.js"></script>
    <script src="/colour.js"></script>
    <script src="/total.js"></script>
    <link rel="stylesheet" href="/styles.css"></link>
  </head>
  <body>
    <div id="content">
      <h1 class="center">
	PHP MVC/OOP Coding Test
      </h1>
      <div id="explaination">
	<h2>
	  Colours
	</h2>
	<div id="explaination-text">
	  Click on the colour name to see how many votes for that colour.  When you click on total, the sum of all the numbers will show.
	</div>
      </div>
      <div id="votes-output">
      </div>
    </div>
  </body>
</html>
