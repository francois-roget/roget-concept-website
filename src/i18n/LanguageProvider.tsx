'use client';

import {
	createContext,
	useContext,
	useState,
	useEffect,
	type ReactNode,
} from 'react';
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

function detectLocale(): Locale {
	const saved = localStorage.getItem('locale') as Locale | null;
	if (saved === 'en' || saved === 'fr') return saved;
	if (navigator.language.toLowerCase().startsWith('fr')) return 'fr';
	return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [locale, setLocaleState] = useState<Locale>('en');

	useEffect(() => {
		const detected = detectLocale();
		document.documentElement.lang = detected;
		if (detected !== 'en') {
			// One-time browser locale detection on mount
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setLocaleState(detected);
		}
	}, []);

	const setLocale = (newLocale: Locale) => {
		setLocaleState(newLocale);
		localStorage.setItem('locale', newLocale);
		document.documentElement.lang = newLocale;
	};

	return (
		<I18nContext.Provider value={{ locale, setLocale, t: locales[locale] }}>
			{children}
		</I18nContext.Provider>
	);
}
