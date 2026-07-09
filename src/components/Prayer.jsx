import { useState, useEffect } from 'react';

export const Prayer = () => {
    const [prayerTimings, setPrayerTimings] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchPrayerData();
    }, []);

    const fetchPrayerData = () => {
        setLoading(true);
        setError(null);
        
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
        const day = today.getDate();
        
        const latitude = 51.508515;
        const longitude = -0.1254872;
        
        fetch(`https://api.aladhan.com/v1/calendar/${year}/${month}?latitude=${latitude}&longitude=${longitude}&method=2`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch prayer times');
                }
                return res.json();
            })
            .then((data) => {
                const prayers = [];
                const responseData = data.data;
                
                const todayData = responseData[day - 1];
                if (todayData) {
                    const p = {
                        Fajr: todayData.timings.Fajr,
                        Sunrise: todayData.timings.Sunrise,
                        Dhuhr: todayData.timings.Dhuhr,
                        Asr: todayData.timings.Asr,
                        Maghrib: todayData.timings.Maghrib,
                        Isha: todayData.timings.Isha
                    };
                    prayers.push(p);
                }
                
                setPrayerTimings(prayers);
            })
            .catch((err) => {
                setError('Failed to fetch prayer times. Please try again.');
                console.error('Error:', err);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    
    const formatTime = (timeStr) => {
        if (!timeStr) return '--:--';
        return timeStr.split('(')[0].trim();
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Today's Prayer Times</h2>
            
            {loading && <p style={styles.loading}>Loading prayer times...</p>}
            
            {error && (
                <div style={styles.error}>
                    <p>{error}</p>
                    <button 
                        onClick={fetchPrayerData} 
                        style={styles.retryBtn}
                    >
                        Try Again
                    </button>
                </div>
            )}
            
            {!loading && !error && prayerTimings.length > 0 && (
                <div style={styles.tableContainer}>
                    <table style={styles.table}>
                        <thead>
                            <tr>
                                <th style={styles.th}>Prayer</th>
                                <th style={styles.th}>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={styles.td}>Fajr</td>
                                <td style={styles.td}>{formatTime(prayerTimings[0].Fajr)}</td>
                            </tr>
                            <tr>
                                <td style={styles.td}>Sunrise</td>
                                <td style={styles.td}>{formatTime(prayerTimings[0].Sunrise)}</td>
                            </tr>
                            <tr>
                                <td style={styles.td}>Dhuhr</td>
                                <td style={styles.td}>{formatTime(prayerTimings[0].Dhuhr)}</td>
                            </tr>
                            <tr>
                                <td style={styles.td}>Asr</td>
                                <td style={styles.td}>{formatTime(prayerTimings[0].Asr)}</td>
                            </tr>
                            <tr>
                                <td style={styles.td}>Maghrib</td>
                                <td style={styles.td}>{formatTime(prayerTimings[0].Maghrib)}</td>
                            </tr>
                            <tr>
                                <td style={styles.td}>Isha</td>
                                <td style={styles.td}>{formatTime(prayerTimings[0].Isha)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
            
            {!loading && !error && prayerTimings.length === 0 && (
                <p style={styles.noData}>No prayer times available</p>
            )}
            
            <div style={styles.footer}>
                <small>Times based on ISNA calculation method • London, UK</small>
            </div>
        </div>
    );
};


const styles = {
    container: {
        padding: '30px',
        maxWidth: '800px',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f8f9fa',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        marginTop: '40px',
        marginBottom: '40px'
    },
    title: {
        textAlign: 'center',
        color: '#333',
        marginBottom: '30px',
        fontSize: '28px'
    },
    loading: {
        textAlign: 'center',
        color: '#666',
        fontSize: '16px'
    },
    error: {
        backgroundColor: '#ffebee',
        padding: '15px',
        borderRadius: '8px',
        textAlign: 'center',
        marginBottom: '20px'
    },
    retryBtn: {
        padding: '8px 20px',
        backgroundColor: '#667eea',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        marginTop: '10px'
    },
    tableContainer: {
        overflowX: 'auto'
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        marginBottom: '20px'
    },
    th: {
        backgroundColor: '#667eea',
        color: 'white',
        padding: '15px',
        textAlign: 'left',
        fontSize: '16px'
    },
    td: {
        padding: '15px',
        borderBottom: '1px solid #ddd',
        fontSize: '16px'
    },
    noData: {
        textAlign: 'center',
        color: '#666',
        fontSize: '16px'
    },
    footer: {
        textAlign: 'center',
        color: '#666',
        fontSize: '12px',
        marginTop: '20px',
        paddingTop: '15px',
        borderTop: '1px solid #ddd'
    }
};