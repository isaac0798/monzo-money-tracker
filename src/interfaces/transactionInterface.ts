export default interface TransactionInterface {
    id: string
    created: string
    description: string
    amount: number
    fees: Fees
    currency: string
    merchant: any
    notes: string
    metadata: MetaData
    labels: any
    attachments: any
    international: any
    category: string
    categories: any
    is_load: boolean
    settled: string
    local_amount: number
    updated: string
    account_id: string
    user_id: string
    counterparty: Counterparty
    scheme: string
    dedupe_id: string
    originator: boolean
    include_in_spending: boolean
    can_be_excluded_from_breakdown: boolean
    can_be_made_subscription: boolean
    can_split_the_bill: boolean
    can_add_to_tab: boolean
    amount_is_pending: boolean
    atm_fees_detailed: any
  }
  
  interface Fees {
  }
  
  interface MetaData {
    faster_payment: string
    fps_payment_id: string
    insertion: string
    notes: string
    trn: string
  }
  
  interface Counterparty {
    account_number: string
    name: string
    sort_code: string
    user_id: string
  }