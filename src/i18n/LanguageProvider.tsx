'use client';

import {
	createContext,
	useContext,
	useEffect,
	type ReactNode,
} from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { en, type Translations } from '@/i18n/locales/en';
import { fr } from '@/i18n/locales/fr';

export type Locale = 'en' | 'fr';

const locales: Record<Locale, Translations> = { en, fr };

interface I18nContextType {
	locale: Locale;
	setLocale: (locale: Locale) => void;
	t: Translations;
}

const I18nContext = createContext<I18nContextType>({
	locale: 'en',
	setLocale: () => {},
	t: en,
});

export function useTranslation() {
	return useContext(I18nContext);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
	const pathname = usePathname();
	const router = useRouter();
	const locale: Locale = pathname?.startsWith('/fr') ? 'fr' : 'en';

	useEffect(() => {
		document.documentElement.lang = locale;
	}, [locale]);

	const setLocale = (newLocale: Locale) => {
		router.push(`/${newLocale}`);
	};

	return (
		<I18nContext.Provider value={{ locale, setLocale, t: locales[locale] }}>
			{children}
		</I18nContext.Provider>
	);
}
