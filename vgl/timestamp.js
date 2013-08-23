//////////////////////////////////////////////////////////////////////////////
/**
 * @module ogs.vgl
 */

/*jslint devel: true, forin: true, newcap: true, plusplus: true*/
/*jslint white: true, continue:true, indent: 2*/

/*global vglModule, ogs, vec4, inherit, $*/
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
/**
 * Create a new instance of class timestamp
 *
 * @class
 * @returns {vglModule.timestamp}
 */
//////////////////////////////////////////////////////////////////////////////
var m_globalModifiedTime = 0;

vglModule.timestamp = function() {
  "use strict";

  if (!(this instanceof vglModule.timestamp)) {
    return new vglModule.timestamp();
  }

  var m_modifiedTime = 0;

  this.modified = function() {
    ++m_globalModifiedTime;
    m_modifiedTime = m_globalModifiedTime;
  };

  this.getMTime = function() {
    return m_modifiedTime;
  };
};
