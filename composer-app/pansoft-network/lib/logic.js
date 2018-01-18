'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Sample transaction processor function.
 * @param {org.pansoft.UpdateTransaction} tx The sample transaction instance.
 * @transaction
 */
function updateTransaction(tx) {
 // Save the old value of the asset.
    var oldValue = tx.kycDetailsAsset.attachment;

    // Update the asset with the new value.
    tx.kycDetailsAsset.attachment = tx.newAttachment;

    // Get the asset registry for the asset.
    return getAssetRegistry('org.pansoft.KYCDetailsAsset')
        .then(function (assetRegistry) {

            // Update the asset in the asset registry.
            return assetRegistry.update(tx.kycDetailsAsset);

        });
}
