import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import {
  IconLookup,
  IconDefinition,
  findIconDefinition,
} from '@fortawesome/fontawesome-svg-core';

type FaIconProps = Omit<FontAwesomeIconProps, 'icon'> & {
  lookup: [IconLookup['prefix'], IconLookup['iconName']];
};

const FaIcon = ({ lookup: [prefix, iconName], ...iconProps }: FaIconProps) => {
  const iconDefinition: IconDefinition = findIconDefinition({
    prefix,
    iconName,
  });

  return <FontAwesomeIcon icon={iconDefinition} {...iconProps} />;
};

export default FaIcon;
