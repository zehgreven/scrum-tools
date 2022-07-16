import { BasePageLayout } from '../../shared/layouts';
import { Game } from './Game';

export const PlanningPoker : React.FC = () => {
  return (
    <BasePageLayout title="Planning Poker">
      <Game />
    </BasePageLayout>
  );
};
