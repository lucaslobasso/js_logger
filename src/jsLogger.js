/*!
 * jsLogger, by Lucas Lobasso - http://github.com/lucaslobasso/js_logger
 * jsLogger may be freely distributed under the MIT license.
*/

const jsLogger = (function () {
    let _this  = {},
        levels = { 
            // Modify if needed
            'Trace': 1,
            'Debug': 2,
            'Info' : 3,
            'Warn' : 4,
            'Error': 5,
            'Fatal': 6
        };

    _this.Info = function (msg, namespace = "") {
        log(levels.Info, msg, namespace);
    };

    _this.Debug = function (msg, namespace = "") {
        log(levels.Debug, msg, namespace);
    };

    _this.Error = function (msg, namespace = "") {
        log(levels.Error, msg, namespace);
    };

    _this.Exception = function (exception, msg = "", namespace = "") {
        let message = JSON.stringify(exception);

        if (msg) { 
            message = msg + " | " + message;
        }

        log(levels.Fatal, message, namespace);
    };

    _this.AjaxError = function (xhr, ajaxOptions, thrownError, namespace = "") {
        let statusErrors = {
            '0'  : "Not connected. [0]",
            '400': "Request content was invalid. [400]",
            '401': "Unauthorized access. [401]",
            '403': "Forbidden resource can't be accessed. [403]",
            '404': "Requested page not found. [404]",
            '500': "Internal server error. [500]",
            '503': "Service unavailable. [503]"
        }, msg = statusErrors[xhr.status];

        if (!msg) {
            if (thrownError === 'parsererror')
                msg = 'Requested JSON parse failed.';
            else if (thrownError === 'timeout')
                msg = 'Timeout error.';
            else if (thrownError === 'abort')
                msg = 'Request aborted.';
            else
                msg = 'Uncaught Error.' + xhr.responseText;
        }

        log(levels.Fatal, `${msg} | ${ajaxOptions.type} - ${ajaxOptions.url}`, namespace, ajaxOptions.logRetries);
    };

    function log(level, msg, namespace, retries = false) {
        if (typeof msg !== "string" && typeof msg !== "object") {
            console.log("jsLogger: Message must be a string or an object.");
            return false;
        }
        else if (typeof msg === "object") {
            msg = JSON.stringify(msg);
        }

        let message = [namespace, window.location.href, msg].filter(x => x).join(" | "),
            data    = {
                'level'  : level,
                'message': message
            };

        $.ajax({
            url: '', // Replace with endpoint that logs errors.
            data: data,
            cache: false,
            logRetries: retries
        });
    }

    return _this;
})();

// Handle runtime and resources errors
window.onerror = function (errorMsg, url, lineNumber, column, errorObj) {
    jsLogger.Exception(errorObj, {
        "error" : errorMsg,
        "url"   : url,
        "line"  : lineNumber,
        "column": column
    });
    return false;
};

// Handle Promise rejections
window.onunhandledrejection = function (event) {
    jsLogger.Exception(event.reason, event.reason ? event.reason.message : "");
    return false;
};

// handle AJAX requests errors.
$(document).ajaxError(function (event, request, settings, thrownError) {
    if (settings.logRetries === 0) {
        console.log(`jsLogger: Could not log message ${thrownError}.`);
        return;
    }
    else if (!settings.logRetries) {
        settings.logRetries = 5;
    }
    else {
        settings.logRetries--;
    }

    jsLogger.AjaxError(request, settings, thrownError);
});