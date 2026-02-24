'use server'

export async function submitApplication(data: any) {
    try {
        const response = await fetch('https://late-hands-enter.loca.lt/webhook/15cf8cfd-6e50-429d-aa46-d7a4f13cb807', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Bypass-Tunnel-Reminder': 'true' // Localtunnel specific header to bypass warning
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Status ${response.status}: ${errorText.substring(0, 50)}`);
        }

        return { success: true };
    } catch (error: any) {
        console.error('Webhook error:', error);
        return { success: false, error: error.message || 'Error desconocido' };
    }
}
