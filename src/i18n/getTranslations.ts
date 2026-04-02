import { en } from './locales/en';
import { fr } from './locales/fr';

export function getTranslations(locale: string) {
	return locale === 'fr' ? fr : en;
}
