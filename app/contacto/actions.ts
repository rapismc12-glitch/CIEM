'use server'

export async function submitApplication(data: any) {
    try {
        const response = await fetch('https://some-hats-rescue.loca.lt/webhook/15cf8cfd-6e50-429d-aa46-d7a4f13cb807', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Bypass-Tunnel-Reminder': 'true' // Localtunnel specific header to bypass warning
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Server returned status: ${response.status}`);
        }

        return { success: true };
    } catch (error) {
        console.error('Webhook error:', error);
        return { success: false, error: 'Network or internal error' };
    }
}
