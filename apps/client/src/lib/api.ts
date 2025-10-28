const API_URL = (import.meta as { env?: { VITE_API_URL?: string } }).env?.VITE_API_URL || 'http://localhost:4000';

export async function pingServer(): Promise<"ok" | "down"> {
    try {
        const res = await fetch(`${API_URL}/health`);
        const json = await res.json();
        return json?.status === "ok" ? "ok" : "down";
    } catch {
        return "down";
    }
}