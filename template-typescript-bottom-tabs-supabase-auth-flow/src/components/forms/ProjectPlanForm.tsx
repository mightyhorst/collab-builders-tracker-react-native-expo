import React from 'react';
import './project.css';
import { View } from 'react-native';
import {
    Picker,
    Text,
    Section,
    SectionContent,
    TextInput,
} from 'react-native-rapi-ui';
import {
    ProjectPlanData,
    IProjectPlan,
} from '../../models';

export const ProjectPlanForm = () => {
    return (
        <Section>
            <header className="page-header">
                <h4 className="h4">
                    {' '}
                    🔨 Colab Group / ⏰ Time Sheet /{' '}
                </h4>
                <h1 className="h1">
                    🛖 12 Cowper Street, Devonport, Auckland
                </h1>
            </header>
            {/* <input type="text" style={{ fontSize: 20 }} /> */}
            {ProjectPlanData.map((cat, _catIdx) => {
                return (
                    <article key={cat.Code} className="cat">
                        <header className="cat__header">
                            <span className="cat__code">{cat.Code}</span>
                            <span className="cat__description">
                                {cat.Description}
                            </span>
                        </header>
                        <section className="cat__body">
                            {cat.kids?.map((subCat, _subCatIdx) => {
                                return (
                                    <section
                                        key={subCat.Code}
                                        className="sub-cat"
                                    >
                                        <header className="sub-cat__header">
                                            <div className="sub-cat__code">
                                                {subCat.Code}
                                            </div>
                                            <div className="sub-cat__description">
                                                {subCat.Description}
                                            </div>
                                        </header>
                                        <section className="sub-cat__body">
                                            {subCat.cats?.map(
                                                (subCatTitle, _subCatTitleIdx) => {
                                                    return (
                                                        <section
                                                            key={subCatTitle.name}
                                                            className="sub-cat-title"
                                                        >
                                                            <header className="sub-cat-title__header">
                                                                <div className="sub-cat-title__name">
                                                                    {subCatTitle.name}
                                                                </div>
                                                            </header>
                                                            <section className="sub-cat-title__body">
                                                                {subCatTitle.kids?.map(
                                                                    (task, _taskIdx) => {
                                                                        return (
                                                                            <div
                                                                                className="task"
                                                                                key={task.Code}
                                                                            >
                                                                                <span className="task__code">
                                                                                    {task.Code}
                                                                                </span>
                                                                                <span className="task__desc">
                                                                                    {task.Description}
                                                                                </span>
                                                                                <span className="task__start">
                                                                                    <button>⏰</button>
                                                                                </span>
                                                                            </div>
                                                                        );
                                                                    }
                                                                )}
                                                            </section>
                                                        </section>
                                                    );
                                                }
                                            )}
                                        </section>
                                    </section>
                                );
                            })}
                        </section>
                    </article>
                );
            })}
        </Section>
    );
};

export default ProjectPlanForm;
