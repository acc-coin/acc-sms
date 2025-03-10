import * as dotenv from "dotenv";
dotenv.config({ path: "env/.env" });

import { HTTPClient } from "../../src/utils/HTTPClient";

import { AxiosResponse } from "axios";

import URI from "urijs";

import { URL } from "url";

async function main() {
    const url = URI("https://api.semaphore.co")
        .directory("/api/v4/messages")
        .filename("237590749")
        .addQuery("apikey", process.env.PH_SMS_APIKEY || "")
        .toString();
    const client = new HTTPClient();
    client
        .get(url)
        .then((r: AxiosResponse) => {
            console.log(r.data);
        })
        .catch((e: any) => {
            console.error(e);
        });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
