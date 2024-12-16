const refreshToken = async () => {
 
    const refresh = localStorage.getItem('refreshToken');
    console.log(refresh);
    
    if (refresh) {
        console.log(refresh);
        
        const response = await fetch('http://192.168.1.87:8000/api/token/refresh/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ refresh }),
        });
        if (response.ok) {
            const { access } = await response.json();
            console.log(access);
            
            localStorage.setItem('accessToken', access);
            return access;
        } else {
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('accessToken');
        }
    }
};

export default refreshToken;