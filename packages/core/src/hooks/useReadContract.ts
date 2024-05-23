import { ArgsOrCalldata, BlockNumber } from "starknet";

import { UseQueryProps, UseQueryResult } from "~/query";

import {
  Abi,
  ExtractAbiFunctionNames,
  FunctionArgs,
  FunctionRet,
} from "abi-wan-kanabi/dist/kanabi";

import { CallQueryKey, UseCallProps, useCall } from "./useCall";

type ReadContractArgs = {
  /** The contract's function name. */
  functionName: string;
  /** Read arguments. */
  args?: ArgsOrCalldata;
  /** Block identifier used when performing call. */
  blockIdentifier?: BlockNumber;
};

type Result<
  TAbi extends Abi,
  TFunctionName extends ExtractAbiFunctionNames<TAbi>
> = FunctionRet<TAbi, TFunctionName>;

/** Options for `useReadContract`. */
export type UseReadContractProps<
  TAbi extends Abi,
  TFunctionName extends ExtractAbiFunctionNames<TAbi>
> = Omit<ReadContractArgs, "functionName" | "args"> &
  UseQueryProps<
    Result<TAbi, TFunctionName>,
    Error,
    Result<TAbi, TFunctionName>,
    ReturnType<CallQueryKey>
  > & {
    /** The target contract's ABI.
     *
     * @remarks
     *
     * You must pass ABI as const
     *
     * @example
     * abi: [
     *   {
     *     type: "function",
     *     name: "fn_simple_array",
     *     inputs: [
     *       {
     *         name: "arg",
     *         type: "core::array::Array::<core::integer::u8>",
     *       },
     *     ],
     *     outputs: [],
     *     state_mutability: "view",
     *   }
     *  ] as const
     *
     */
    abi?: TAbi;
    /** The target contract's address. */
    address?: string;
    /** Refresh data at every block. */
    watch?: boolean;
    /** The contract's function name. */
    functionName: TFunctionName;
    /** Read arguments. */
    args?: FunctionArgs<TAbi, TFunctionName>;
  };

/** Value returned from `useReadContract`. */
export type UseReadContractResult<
  TAbi extends Abi,
  TFunctionName extends ExtractAbiFunctionNames<TAbi>
> = UseQueryResult<Result<TAbi, TFunctionName>, Error>;

/**
 * Hook to perform a read-only contract call.
 *
 * @remarks
 *
 * - The hook only performs a call if the target `abi`, `address`,
 * `functionName`, and `args` are not undefined.
 *
 * - You must pass `abi` as `const` for autocomplete to work.
 */
export function useReadContract<
  TAbi extends Abi,
  TFunctionName extends ExtractAbiFunctionNames<TAbi>
>(props: UseReadContractProps<TAbi, TFunctionName>) {
  const { args, ...rest } = props;

  // Note: Currently, "starknet.js" requires arguments to be passed as an array.
  // This hook, enhanced by "abi-wan-kanabi", offers stricter type safety for functionName,
  // args, and the returned data.
  //
  // If a function takes a single argument,
  // "abi-wan-kanabi" expects it as a standalone value, not an array.
  // To comply with "starknet.js" requirements, if args is not already an array,
  // we wrap it in an array before passing it on. This ensures compatibility
  // while maintaining the type safety provided by "abi-wan-kanabi".

  return useCall({
    args: typeof args !== "object" ? [args] : args,
    ...rest,
  } as UseCallProps) as UseReadContractResult<TAbi, TFunctionName>;
}
