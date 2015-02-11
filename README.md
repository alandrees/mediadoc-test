# mediadoc-test
This is the code for the mediadoc test application.

A live version of this code can be found here: http://mdt.alandre.es

####Installation:

Browse to your http directory, and issue the following command:

  git clone https://github.com/alandrees/mediadoc-test.git ./

I have included an sqlite database (media-doc-test) for ease of portability, you'll need the sqlite php module loaded to run it.

Please refer to your distribution documentation to install sqlite.

Requires:

PDO
sqlite

####Configuration

The config.php file contains the options for the application:

$servertype - set to either 'sqlite' or 'mysql', determines the type of backend database server

$server - if using sqlite, the path to the database file, if using mysql, the hostname for the server

$username - mysql username

$password - mysql password

$database - mysql database

$total_type - Setting this to MDT_Config::DATABASE_TOTAL totals all the database values, setting it to MDT_Config::ACQUIRED_TOTAL totals only the already retrived values.
