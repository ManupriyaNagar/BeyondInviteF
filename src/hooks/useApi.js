import { useState, useEffect } from 'react';

// Custom hook for API data fetching with loading and error states
export function useApi(apiFunction, dependencies = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await apiFunction();
        
        if (isMounted) {
          setData(result);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'An error occurred');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, dependencies);

  const refetch = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiFunction();
      setData(result);
    } catch (err) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, refetch };
}

// Hook for dashboard stats
export function useDashboardStats() {
  return useApi(async () => {
    const { analyticsAPI } = await import('../lib/api');
    return analyticsAPI.getDashboardStats();
  });
}

// Hook for templates
export function useTemplates() {
  return useApi(async () => {
    const { templatesAPI } = await import('../lib/api');
    return templatesAPI.getAll();
  });
}

// Hook for invitations
export function useInvitations() {
  return useApi(async () => {
    const { invitationsAPI } = await import('../lib/api');
    return invitationsAPI.getAll();
  });
}

// Hook for orders
export function useOrders() {
  return useApi(async () => {
    const { ordersAPI } = await import('../lib/api');
    return ordersAPI.getAll();
  });
}

// Hook for customers
export function useCustomers() {
  return useApi(async () => {
    const { customersAPI } = await import('../lib/api');
    return customersAPI.getAll();
  });
}

// Hook for categories
export function useCategories() {
  return useApi(async () => {
    const { categoriesAPI } = await import('../lib/api');
    return categoriesAPI.getAll();
  });
}