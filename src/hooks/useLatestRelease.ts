import { useState, useEffect } from 'react';

export const FALLBACK_VERSION = '7.4.3.2';
export const FALLBACK_RELEASE_URL = 'https://github.com/metawka/exDesktop/releases/latest';

export interface ReleaseInfo {
  version: string;
  rawTag: string;
  releaseUrl: string;
  publishedAt?: string;
  isLoading: boolean;
}

export function useLatestRelease(): ReleaseInfo {
  const [info, setInfo] = useState<ReleaseInfo>({
    version: FALLBACK_VERSION,
    rawTag: `v${FALLBACK_VERSION}`,
    releaseUrl: FALLBACK_RELEASE_URL,
    isLoading: true
  });

  useEffect(() => {
    let isMounted = true;

    async function fetchLatestRelease() {
      try {
        const response = await fetch('https://api.github.com/repos/metawka/exDesktop/releases/latest');
        if (!response.ok) {
          throw new Error(`GitHub API HTTP ${response.status}`);
        }
        const data = await response.json();

        if (isMounted && data.tag_name) {
          const rawTag = String(data.tag_name);
          const version = rawTag.replace(/^v/, '');
          setInfo({
            version,
            rawTag,
            releaseUrl: data.html_url || FALLBACK_RELEASE_URL,
            publishedAt: data.published_at,
            isLoading: false
          });
        }
      } catch {
        // Fallback gracefully on rate limits or network issues
        if (isMounted) {
          setInfo((prev) => ({ ...prev, isLoading: false }));
        }
      }
    }

    fetchLatestRelease();

    return () => {
      isMounted = false;
    };
  }, []);

  return info;
}
