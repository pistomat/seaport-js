import { Seaport } from "./seaport";
import type {
  BalancesAndApprovals,
  InsufficientBalances,
  InsufficientApprovals,
} from "./utils/balanceAndApprovalCheck";
import {
  getBalancesAndApprovals,
  getInsufficientBalanceAndApprovalAmounts,
  validateOfferBalancesAndApprovals,
  validateBasicFulfillBalancesAndApprovals,
  validateStandardFulfillBalancesAndApprovals,
} from "./utils/balanceAndApprovalCheck";
import type { TimeBasedItemParams } from "./utils/item";
import {
  isCurrencyItem,
  isNativeCurrencyItem,
  isErc20Item,
  isErc721Item,
  isErc1155Item,
  isCriteriaItem,
  getPresentItemAmount,
  getSummedTokenAndIdentifierAmounts,
  getMaximumSizeForOrder,
} from "./utils/item";
import {
  feeToConsiderationItem,
  deductFees,
  mapInputItemToOfferItem,
  areAllCurrenciesSame,
  totalItemsAmount,
  mapOrderAmountsFromFilledStatus,
  mapOrderAmountsFromUnitsToFill,
  generateRandomSalt,
  shouldUseMatchForFulfill,
} from "./utils/order";

export { Seaport };
export type {
  BalancesAndApprovals,
  InsufficientBalances,
  InsufficientApprovals,
};
export {
  getBalancesAndApprovals,
  getInsufficientBalanceAndApprovalAmounts,
  validateOfferBalancesAndApprovals,
  validateBasicFulfillBalancesAndApprovals,
  validateStandardFulfillBalancesAndApprovals,
};
export type { TimeBasedItemParams };
export {
  isCurrencyItem,
  isNativeCurrencyItem,
  isErc20Item,
  isErc721Item,
  isErc1155Item,
  isCriteriaItem,
  getPresentItemAmount,
  getSummedTokenAndIdentifierAmounts,
  getMaximumSizeForOrder,
};
export {
  feeToConsiderationItem,
  deductFees,
  mapInputItemToOfferItem,
  areAllCurrenciesSame,
  totalItemsAmount,
  mapOrderAmountsFromFilledStatus,
  mapOrderAmountsFromUnitsToFill,
  generateRandomSalt,
  shouldUseMatchForFulfill,
};
