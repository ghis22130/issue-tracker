import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useCallback } from 'react';
import { IssueListItemType } from '@components/common/types/APIType';
import { useRecoilState } from '@/utils/myRecoil/useRecoilState';
import { issueCheckedItemAtom, CheckBoxItemType, issueCheckedAllItemAtom } from '@components/common/atoms/checkBoxAtom';
import AlertCircleIcon from '@/Icons/AlertCircle.svg';
import Label from '@components/common/Label';
import IssueDesc from './IssueDesc';
type ListItemType = {
  issueItem: IssueListItemType
}

const ListItem = ({ issueItem }: ListItemType) => {
  const [checkedState, setCheckedState] = useState(false);
  const [, setCheckedIssueItems] = useRecoilState(issueCheckedItemAtom);
  const [isAllIssueChecked] = useRecoilState(issueCheckedAllItemAtom);

  const handleCheckChange = useCallback(({ id }) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedState(checkedState => !checkedState);
    const isChecked = event.target.checked;
    setCheckedIssueItems((checkedItems: CheckBoxItemType) => {
      isChecked ? checkedItems.add(id) : checkedItems.delete(id);
      return checkedItems;
    })
  }, []);


  useEffect(() => {
    setCheckedState(isAllIssueChecked);
  }, [isAllIssueChecked])
  return (
    <ListItemWrapper>
      <LeftWrapper>
        <CheckBox type="checkbox" checked={checkedState} onChange={handleCheckChange({ id: issueItem.id })} />
        <div>
          <IssueTitleWrapper>
            <img src={AlertCircleIcon} alt="" />
            <IssueTitle>{issueItem.title}</IssueTitle>
            {issueItem.labels.labels.length && issueItem.labels.labels.map(({ name, id, color }) => {
              return <Label {...{ name, color }} key={id} />
            })}
          </IssueTitleWrapper>
          <IssueDesc {...{ issueItem }} />
        </div>
      </LeftWrapper>
      <RightWrapper>
        <WriterImage src='https://user-images.githubusercontent.com/61257242/121417591-0d02b480-c9a5-11eb-9c7e-d926e8731bfb.png' alt="" />
      </RightWrapper>
    </ListItemWrapper>
  )
}

const ListItemWrapper = styled.div`
  display:flex;
  justify-content: space-between;
`;

const CheckBox = styled.input`
  margin:10px 33px 4px 4px;
`;

const LeftWrapper = styled.div`
  display:flex;
`;

const RightWrapper = styled.div`
  display:flex;
`;
const IssueTitleWrapper = styled.div`
  display:flex;
  place-items: center;
`;

const WriterImage = styled.img`
  width:20px;
  height: 20px;
  margin-right: 22px;
  border-radius: 50%;
  place-self: center;
`;

const IssueTitle = styled.div`
  margin:0 10px;
  font-size: 18px;
  font-weight: 700;
  place-self: flex-end;
`;


export default ListItem;
