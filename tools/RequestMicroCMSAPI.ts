export default async function (api: string, filterRecent: boolean) {
    const API_KEY = Deno.env.get("MICROCMS_API_KEY") || "";
    const ENDPOINT = `${Deno.env.get("MICROCMS_API_ENDPOINT") || ""}${api}${
        filterRecent ? "?limit=5&" : "?"
    }orders=-updatedAt`;

    const response = await fetch(ENDPOINT, {
        headers: { "X-MICROCMS-API-KEY": API_KEY! },
    });

    const json = await response.json();

    return json;
}
