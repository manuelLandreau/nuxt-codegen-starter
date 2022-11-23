import { useI18n } from 'vue-i18n';
import { SiteLocale } from '@/graphql/types';

export const useCurrentLocal = () => {
	const { locale } = useI18n();

	return (
		Object.values(SiteLocale).find(
			(siteLocale) => siteLocale === String(locale.value)
		) || SiteLocale.En
	);
};
