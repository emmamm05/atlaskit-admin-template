import PeopleGroupIcon from '@atlaskit/icon/glyph/people-group';
import DocumentsIcon from '@atlaskit/icon/glyph/documents';
import EditorBulletListIcon from '@atlaskit/icon/glyph/editor/bullet-list';
import ArrowUpIcon from '@atlaskit/icon/glyph/arrow-up';
import OfficeBuildingIcon from '@atlaskit/icon/glyph/office-building';

// TODO: Fix all Items ids.
const bonoFormNavItems = (id, status) => ({
  id: 'bonos',
  type: 'product',
  getItems: () => [
    {
      type: 'HeaderSection',
      id: 'product/home:header',
      items: [
        {
          type: 'ProjectInfoHeader',
          casoId: id,
          status,
          to: '/',
          id: 'urbarium-wordmark',
        },
      ],
    },
    {
      type: 'MenuSection',
      id: 'product/home:menu',
      items: [
        {
          type: 'LinkItem',
          id: 'beneficiarios',
          before: PeopleGroupIcon,
          text: 'Beneficiarios',
          to: '/beneficiarios',
        },
        {
          type: 'LinkItem',
          id: 'users',
          before: EditorBulletListIcon,
          text: 'Casos de Bono',
          to: '/casos-de-bono',
        },
        {
          type: 'LinkItem',
          id: 'tramites',
          before: DocumentsIcon,
          text: 'Trámites',
          to: '/tramites',
        },
        {
          type: 'LinkItem',
          id: 'construccion',
          before: OfficeBuildingIcon,
          text: 'Construcción',
          to: '/construccion',
        },
        {
          type: 'LinkItem',
          id: 'desembolso',
          before: ArrowUpIcon,
          text: 'Desembolso',
          to: '/desembolso',
        },
      ],
    },
  ],
});

export default bonoFormNavItems;
