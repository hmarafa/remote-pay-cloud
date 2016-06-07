/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

// Prototype.js required
require("prototype");
var remotepay_BaseResponse = require("../remotepay/BaseResponse");
var payments_VaultedCard = require("../payments/VaultedCard");

  /**
  * @constructor
  */
  VaultCardResponse = Class.create(remotepay_BaseResponse, {
    /**
    * Initialize the values for this.
    * @private
    */
    initialize: function($super) {
      $super();
      this._class_ = VaultCardResponse;
      this.card = undefined;
    },

    /**
    * Set the field value
    * The card that was vaulted.
    *
    * @param {VaultedCard} card 
    */
    setCard: function(card) {
      this.card = card;
    },

    /**
    * Get the field value
    * The card that was vaulted.
      * @return {VaultedCard} 
    */
    getCard: function() {
      return this.card;
    }
  });

VaultCardResponse._meta_ =  {fields:  {}};
VaultCardResponse._meta_.fields["card"] = {};
VaultCardResponse._meta_.fields["card"].type = payments_VaultedCard;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = VaultCardResponse;
}
