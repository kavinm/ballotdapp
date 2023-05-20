/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Ballot,
  BallotInterface,
} from "../../../contracts/TokenizedBallot.sol/Ballot";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "proposalNames",
        type: "bytes32[]",
      },
      {
        internalType: "address",
        name: "_tokenContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_targetBlockNumber",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "proposals",
    outputs: [
      {
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "voteCount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "targetBlockNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenContract",
    outputs: [
      {
        internalType: "contract IMyVotingToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposal",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "votingPower",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "votingPowerSpent",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "winnerName",
    outputs: [
      {
        internalType: "bytes32",
        name: "winnerName_",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "winningProposal",
    outputs: [
      {
        internalType: "uint256",
        name: "winningProposal_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000e0438038062000e04833981810160405281019062000037919062000383565b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060028190555060005b8351811015620001155760016040518060400160405280868481518110620000ae57620000ad620003fe565b5b60200260200101518152602001600081525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505080806200010c906200045c565b91505062000081565b50505050620004a9565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620001838262000138565b810181811067ffffffffffffffff82111715620001a557620001a462000149565b5b80604052505050565b6000620001ba6200011f565b9050620001c8828262000178565b919050565b600067ffffffffffffffff821115620001eb57620001ea62000149565b5b602082029050602081019050919050565b600080fd5b6000819050919050565b620002168162000201565b81146200022257600080fd5b50565b60008151905062000236816200020b565b92915050565b6000620002536200024d84620001cd565b620001ae565b90508083825260208201905060208402830185811115620002795762000278620001fc565b5b835b81811015620002a6578062000291888262000225565b8452602084019350506020810190506200027b565b5050509392505050565b600082601f830112620002c857620002c762000133565b5b8151620002da8482602086016200023c565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200031082620002e3565b9050919050565b620003228162000303565b81146200032e57600080fd5b50565b600081519050620003428162000317565b92915050565b6000819050919050565b6200035d8162000348565b81146200036957600080fd5b50565b6000815190506200037d8162000352565b92915050565b6000806000606084860312156200039f576200039e62000129565b5b600084015167ffffffffffffffff811115620003c057620003bf6200012e565b5b620003ce86828701620002b0565b9350506020620003e18682870162000331565b9250506040620003f4868287016200036c565b9150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620004698262000348565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036200049e576200049d6200042d565b5b600182019050919050565b61094b80620004b96000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063a72003511161005b578063a720035114610118578063b384abef14610148578063c07473f614610164578063e2ba53f01461019457610088565b8063013cf08b1461008d5780632a8cd29e146100be57806355a373d6146100dc578063609ff1bd146100fa575b600080fd5b6100a760048036038101906100a291906104f1565b6101b2565b6040516100b5929190610546565b60405180910390f35b6100c66101e6565b6040516100d3919061056f565b60405180910390f35b6100e46101ec565b6040516100f19190610609565b60405180910390f35b610102610210565b60405161010f919061056f565b60405180910390f35b610132600480360381019061012d9190610662565b610298565b60405161013f919061056f565b60405180910390f35b610162600480360381019061015d919061068f565b6102b0565b005b61017e60048036038101906101799190610662565b610391565b60405161018b919061056f565b60405180910390f35b61019c610482565b6040516101a991906106cf565b60405180910390f35b600181815481106101c257600080fd5b90600052602060002090600202016000915090508060000154908060010154905082565b60025481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806000905060005b60018054905081101561029357816001828154811061023c5761023b6106ea565b5b90600052602060002090600202016001015411156102805760018181548110610268576102676106ea565b5b90600052602060002090600202016001015491508092505b808061028b90610748565b91505061021a565b505090565b60036020528060005260406000206000915090505481565b806102ba33610391565b10156102fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102f290610813565b60405180910390fd5b80600183815481106103105761030f6106ea565b5b906000526020600020906002020160010160008282546103309190610833565b9250508190555080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546103869190610867565b925050819055505050565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205460008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633a46b1a8846002546040518363ffffffff1660e01b81526004016104309291906108aa565b602060405180830381865afa15801561044d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061047191906108e8565b61047b9190610867565b9050919050565b6000600161048e610210565b8154811061049f5761049e6106ea565b5b906000526020600020906002020160000154905090565b600080fd5b6000819050919050565b6104ce816104bb565b81146104d957600080fd5b50565b6000813590506104eb816104c5565b92915050565b600060208284031215610507576105066104b6565b5b6000610515848285016104dc565b91505092915050565b6000819050919050565b6105318161051e565b82525050565b610540816104bb565b82525050565b600060408201905061055b6000830185610528565b6105686020830184610537565b9392505050565b60006020820190506105846000830184610537565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006105cf6105ca6105c58461058a565b6105aa565b61058a565b9050919050565b60006105e1826105b4565b9050919050565b60006105f3826105d6565b9050919050565b610603816105e8565b82525050565b600060208201905061061e60008301846105fa565b92915050565b600061062f8261058a565b9050919050565b61063f81610624565b811461064a57600080fd5b50565b60008135905061065c81610636565b92915050565b600060208284031215610678576106776104b6565b5b60006106868482850161064d565b91505092915050565b600080604083850312156106a6576106a56104b6565b5b60006106b4858286016104dc565b92505060206106c5858286016104dc565b9150509250929050565b60006020820190506106e46000830184610528565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610753826104bb565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361078557610784610719565b5b600182019050919050565b600082825260208201905092915050565b7f596f75206861766520696e73756666696369656e7420766f74696e6720706f7760008201527f6572000000000000000000000000000000000000000000000000000000000000602082015250565b60006107fd602283610790565b9150610808826107a1565b604082019050919050565b6000602082019050818103600083015261082c816107f0565b9050919050565b600061083e826104bb565b9150610849836104bb565b925082820190508082111561086157610860610719565b5b92915050565b6000610872826104bb565b915061087d836104bb565b925082820390508181111561089557610894610719565b5b92915050565b6108a481610624565b82525050565b60006040820190506108bf600083018561089b565b6108cc6020830184610537565b9392505050565b6000815190506108e2816104c5565b92915050565b6000602082840312156108fe576108fd6104b6565b5b600061090c848285016108d3565b9150509291505056fea264697066735822122016078e28f6d6a670d536d5f639bc76a016ebc670cb4681d74c968e9531c54d8b64736f6c63430008120033";

type BallotConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BallotConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Ballot__factory extends ContractFactory {
  constructor(...args: BallotConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    proposalNames: PromiseOrValue<BytesLike>[],
    _tokenContract: PromiseOrValue<string>,
    _targetBlockNumber: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Ballot> {
    return super.deploy(
      proposalNames,
      _tokenContract,
      _targetBlockNumber,
      overrides || {}
    ) as Promise<Ballot>;
  }
  override getDeployTransaction(
    proposalNames: PromiseOrValue<BytesLike>[],
    _tokenContract: PromiseOrValue<string>,
    _targetBlockNumber: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      proposalNames,
      _tokenContract,
      _targetBlockNumber,
      overrides || {}
    );
  }
  override attach(address: string): Ballot {
    return super.attach(address) as Ballot;
  }
  override connect(signer: Signer): Ballot__factory {
    return super.connect(signer) as Ballot__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BallotInterface {
    return new utils.Interface(_abi) as BallotInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Ballot {
    return new Contract(address, _abi, signerOrProvider) as Ballot;
  }
}
