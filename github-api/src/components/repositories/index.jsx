import React from "react";
import RepositoryItem from "../repository-item";
import * as S from './styled'

const Repositories = () => {
    return (
        <S.WrapperTabs
            selectedTabClassName='is-selected'
            selectedTabPanelClassName="is-selected"
        >
            <S.WrapperTabList>
                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Starred</S.WrapperTab>
            </S.WrapperTabList>
            <S.WrapperTabPanel>
                <RepositoryItem
                    name="Netflix"
                    linkToRepo="https://github.com/gabriel-lumertz/Netflix"
                    fullName="gabriel-lumertz/Netflix"/>
            </S.WrapperTabPanel>
            <S.WrapperTabPanel>
            <RepositoryItem
                    name="basecamp-javascript"
                    linkToRepo="https://github.com/stebsnusch/basecamp-javascript"
                    fullName="stebsnusch/basecamp-javascript"/>
            </S.WrapperTabPanel>
        </S.WrapperTabs>
    )
}

export default Repositories