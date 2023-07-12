import { t } from '~/lib/i18n';
import { SuffixConfigSection } from './components/domain/SuffixConfigSection';
import { AvatarImageReplacementSection } from './components/domain/AvatarImageReplacementSection';
import { AddImagesSection } from './components/domain/AddImagesSection';
import './options.scss';

export const Options = () => {
  const configLabel = t('configurations');

  return (
    <div className="container">
      <h1 className="title">{configLabel}</h1>
      <SuffixConfigSection />
      <AvatarImageReplacementSection />
      <AddImagesSection />
    </div>
  );
};
