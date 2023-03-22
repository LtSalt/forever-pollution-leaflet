export async function load({ fetch }) {
    const res = await fetch("src/lib/data/fp.json");
    const fp = await res.json();

    return { fp }
}