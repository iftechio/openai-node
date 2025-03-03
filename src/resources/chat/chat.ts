// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'openai/resource';
import { Completions } from './completions';
import * as API from './index';

export class Chat extends APIResource {
  completions: Completions = new Completions(this.client);
}

export namespace Chat {
  export import Completions = API.Completions;
  export import ChatCompletion = API.ChatCompletion;
  export import ChatCompletionChunk = API.ChatCompletionChunk;
  export import ChatCompletionMessage = API.ChatCompletionMessage;
  export import ChatCompletionMessageParam = API.ChatCompletionMessageParam;
  export import CreateChatCompletionRequestMessage = API.CreateChatCompletionRequestMessage;
  export import ChatCompletionCreateParams = API.ChatCompletionCreateParams;
  export import CompletionCreateParams = API.CompletionCreateParams;
  export import ChatCompletionCreateParamsNonStreaming = API.ChatCompletionCreateParamsNonStreaming;
  export import CompletionCreateParamsNonStreaming = API.CompletionCreateParamsNonStreaming;
  export import ChatCompletionCreateParamsStreaming = API.ChatCompletionCreateParamsStreaming;
  export import CompletionCreateParamsStreaming = API.CompletionCreateParamsStreaming;
}
