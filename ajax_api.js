/**
 * Copyright 2014 Alan Drees
 *    
 * Purpose:
 *  Contains all the functions needed to make ajax api calls
 *
 * Dependencies:
 * jquery
 *
 */   

var AD = AD || {};

if(typeof AD.AjaxAPI === 'undefined')
{
    AD.AjaxAPI = {};
}

/*************/
/* functions */
/*************/

/**\fn api_call
 *
 * Execute an API call against a backend API
 *
 * @param endpoint the api endpoint to execute
 * @param func api endpoint identifier
 * @param data data to be called with the API
 * @param okfunc function to be executed upon successful api call
 * @param ctype set the content type for the ajax call (true or false)
 * @param failfunc function to be executed upon unsuccessful api call (optional)
 *
 * @returns None
 */

AD.AjaxAPI.ajax_api_call = function(endpoint, func, data, okfunc, ctype, failfunc, async)
{
    if(typeof ctype === 'undefined') ctype = 'application/x-www-form-urlencoded';
    if(typeof async === 'undefined') async = true;

    $.ajax({ url: endpoint + '?' + func,
             type: 'POST',
             data: data,
             cache: false,
             contentType: ctype,
             processData: false,
	     async: async,
             timeout: 50000,
		       complete: function(jqXHR, status, thrownError)
		       {
                 data = jqXHR.responseJSON

                 if(data['code'] == 0)
                 {
                     if(typeof okfunc === 'function')
                     {
                         okfunc(data);
                     }
                 }
                 else
                 {
                     if(typeof failfunc === 'function')
                     {
                         failfunc(data);
                     }
                     else
                     {
                         TE.Util.log(data['message']);
                     }
                 }
             },
             error: function(jqXHR, status, error)
             {
                 if(status === "timeout")
                 {
                     alert("A timeout has occured.");
                 }
                 else
                 {
                     alert(status);
                 }
             }
           });
}
