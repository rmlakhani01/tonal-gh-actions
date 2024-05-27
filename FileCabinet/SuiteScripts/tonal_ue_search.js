/**
 *@NApiVersion 2.x
 *@NScriptType UserEventScript
 */
// @ts-ignore
define(['N/search'], function (search) {
  module.exports = function afterSubmit(context) {
    const results = []
    search
      .create({
        type: 'customrecord_item_fulfill_stage',
        filters: [
          {
            name: 'custrecord_item_fulfill_stg_status',
            operator: search.Operator.ANYOF,
            values: ['1'],
          },
        ],
        columns: [
          { name: 'internalid' },
          { name: 'custrecord_item_fulfill_tracking_num' },
          { name: 'custrecord_item_fulfill_stg_header' },
          { name: 'custrecord_item_fulfill_stg_lines' },
          { name: 'custrecord_item_fulfill_class' },
        ],
      })
      .run()
      .each((result) => {
        results.push({
          id: result.getValue({ name: 'internalid' }),
          trackingNum: result.getValue({
            name: 'custrecord_item_fulfill_tracking_num',
          }),
          header: result.getValue({
            name: 'custrecord_item_fulfill_stg_header',
          }),
          lines: result.getValue({
            name: 'custrecord_item_fulfill_stg_lines',
          }),
          class: result.getValue({
            name: 'custrecord_item_fulfill_class',
          }),
        })
      })

    return {
      afterSubmit: afterSubmit,
    }
  }
})
