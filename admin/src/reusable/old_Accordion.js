<CAccordion>
    <CAccordionItem>
        <CAccordionHeader>
            <CAccordionButton
                collapsed={activeKey !== 1}
                onClick={() =>
                    activeKey === 1 ? setActiveKey(0) : setActiveKey(1)
                }
            >
                Accordion Item #1
          </CAccordionButton>
        </CAccordionHeader>
        <CAccordionCollapse visible={activeKey === 1}>
            <CAccordionBody>
                {/* Content */}
            </CAccordionBody>
        </CAccordionCollapse>
    </CAccordionItem>
    <CAccordionItem>
        <CAccordionHeader>
            <CAccordionButton
                collapsed={activeKey !== 1}
                onClick={() =>
                    activeKey === 1 ? setActiveKey(0) : setActiveKey(1)
                }
            >
                Accordion Item #1
          </CAccordionButton>
        </CAccordionHeader>
        <CAccordionCollapse visible={activeKey === 1}>
            <CAccordionBody>
                {/* Content */}
            </CAccordionBody>
        </CAccordionCollapse>
    </CAccordionItem>
    <CAccordionItem>
        <CAccordionHeader>
            <CAccordionButton
                collapsed={activeKey !== 1}
                onClick={() =>
                    activeKey === 1 ? setActiveKey(0) : setActiveKey(1)
                }
            >
                Accordion Item #1
          </CAccordionButton>
        </CAccordionHeader>
        <CAccordionCollapse visible={activeKey === 1}>
            <CAccordionBody>
                {/* Content */}
            </CAccordionBody>
        </CAccordionCollapse>
    </CAccordionItem>
</CAccordion>

