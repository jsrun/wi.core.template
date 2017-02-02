/**
 *  __          __  _    _____ _____  ______ _______                   _       _       
 *  \ \        / / | |  |_   _|  __ \|  ____|__   __|                 | |     | |      
 *   \ \  /\  / /__| |__  | | | |  | | |__     | | ___ _ __ ___  _ __ | | __ _| |_ ___ 
 *    \ \/  \/ / _ \ '_ \ | | | |  | |  __|    | |/ _ \ '_ ` _ \| '_ \| |/ _` | __/ _ \
 *     \  /\  /  __/ |_) || |_| |__| | |____ _ | |  __/ | | | | | |_) | | (_| | ||  __/
 *      \/  \/ \___|_.__/_____|_____/|______(_)|_|\___|_| |_| |_| .__/|_|\__,_|\__\___|
 *                                                              | |                    
 *                                                              |_|  
 *                                                                                                                                                                                                               
 *  @author André Ferreira <andrehrf@gmail.com>
 *  @license MIT
 */

"use strict";

let fs = require("fs"),
    ejs = require("ejs");

module.exports = function(filename){    
    return {
        /**
         * Template contents
         * @type string
         */
        template: fs.readFileSync(filename).toString(),

        /**
         * Internacionalization module
         * @type object
         */
        i18n: null,

        /**
         * Function to set internacionalization module
         * 
         * @param object i18n
         * @return this
         */        
        seti18n: function(i18n){
            this.i18n = i18n;
            return this;
        },

        /**
         * Function to render template
         * 
         * @param object|null params
         * @return string
         */
        render: function(params){
            if(!params)
                params = {};

            if(typeof this.i18n == "object")
                if(typeof this.i18n.__ == "function")
                    params["__"] = this.i18n.__;

            return ejs.render(this.template, params);
        }
    }
};