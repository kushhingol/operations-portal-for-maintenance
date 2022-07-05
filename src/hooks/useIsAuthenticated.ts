export const useIsAuthenticated = () => {
    const token = localStorage.getItem('token');
    return !!token;
}