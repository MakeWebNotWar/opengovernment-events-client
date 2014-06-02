<?php

/**
 * @file
 * A single location to store configuration.
 */

define('CONSUMER_KEY', $_ENV["Twitter_API_Key"]);
define('CONSUMER_SECRET', $_ENV["Twitter_API_Secret"]);
define('OAUTH_CALLBACK', '@@frontend/oauth/twitter/callback.php');
