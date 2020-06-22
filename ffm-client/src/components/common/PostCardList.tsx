import React from 'react';
import styled from 'styled-components';
import PostCard from './PostCard';
import { mediaQuery } from '../../lib/styles/media';

export type PostCardListProps = {};
const Block = styled.div`
  display: flex;
  margin: -1rem;
  flex-wrap: wrap;
  ${mediaQuery(767)} {
    margin: 0;
  }
`;
function PostCardList(props: PostCardListProps) {
  return (
    <Block>
      <PostCard
        title={'송도 랜드마크 지식산업센터 내 공간'}
        imgUrl={
          'https://repo.sweetspot.co.kr/images/markets/406_1589274548655.jpg?d=386x237'
        }
        description={
          '본 건물은 송도에 위치하였으며, 연면적 약 88,000평에 달하는 초대형 랜드마크 지식산업센터입니다. 모든 공간이 건물의 투명한 외관과 맞닿아 있어, 외부 타 동에서 근무하는 상주인구들의 이목을 사로잡기에 충분합니다. 또한, 건물 주변으로 즐길거리, 쇼핑센터의 부재로 팝업스토어의 오픈은 높은 매출을 일으킬 수 있을 것으로 판단됩니다.'
        }
      />
      <PostCard
        title={'청담 명품거리 대로변에 위치한 공실 공간'}
        imgUrl={
          'https://repo.sweetspot.co.kr/images/markets/412_1590483846561.JPG?d=386x237'
        }
        description={
          '본 건물이 위치한 청담동 명품 거리는 거리에 입점되어 있는 것만으로도 명품이라는 상징성 있는 공간으로 빅 브랜드들의 단독 매장, 플래그십 스토어들이 즐비한 곳입니다.'
        }
      />
      <PostCard
        title={'청담 명품거리 대로변에 위치한 공실 공간'}
        imgUrl={
          'https://images.songc.io/images/songc/post/84487421-0bfd-43f6-ad4b-e7c89d6bbab1/image.png'
        }
        description={
          '본 건물이 위치한 청담동 명품 거리는 거리에 입점되어 있는 것만으로도 명품이라는 상징성 있는 공간으로 빅 브랜드들의 단독 매장, 플래그십 스토어들이 즐비한 곳입니다.'
        }
      />
    </Block>
  );
}

export function PostCardListSkeleton() {
  return <Block></Block>;
}

export default PostCardList;
