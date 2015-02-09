<?php
/**
 * Copyright 2014 Alan Drees
 *
 * Purpose:
 *  Contains AjaxAPI related files
 *
 * Requires:
 *  None
 *
 * Dependencies:
 *  None
 */

/*************/
/* functions */
/*************/

/**\fn output_ajax_data
 *
 * Output the ajax data
 *
 * @param $json (mixed) json data to return
 * @param $html (string) html to return
 * @param $code (integer) status code to return (0 is OK)
 * @param $message (string) status message to return
 *
 * @returns (string) json object with the passed parameters encoded as properties
 */

function output_ajax_data($json = '', $html = '', $code = 0, $message = 'OK')
{
   return json_encode(array('code'    => $code,
                            'message' => $message,
                            'html'    => $html,
                            'json'    => $json));
}


/**\fn validate_function_signature
 *
 * Validates a function signature with the required arguments.
 *
 * @param $param_array paramater array to check the signature against
 * @param $parameters paramters to check for
 *
 * @returns Boolean True if $param_array at minimum satisfies the the paramter list, False otherwise
 */

function validate_function_signature($param_array, $parameters)
{
   foreach($parameters as $param)
   {
      if(!isset($param_array[$param]))
      {
         return False;
      }
   }

   return True;
}

?>