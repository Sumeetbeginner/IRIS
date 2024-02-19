import spacy


def generate_questions_pipeline(sentence):
    nlp = spacy.load("en_core_web_sm")
    doc = nlp(sentence)

    # cyberTitans-Dependency Parsing
    root = [token.text for token in doc if token.dep_ == "ROOT"]
    dependency_question = f"What does {root[0]} mean?" if root else "What is the main idea of the sentence?"

    # cyberTitans- POS Tagging
    main_verb = [token.text for token in doc if token.pos_ == "VERB"]
    proper_noun = [token.text for token in doc if token.pos_ == "PROPN"]
    common_noun = [token.text for token in doc if token.pos_ == "NOUN"]
    adverb = [token.text for token in doc if token.pos_ == "ADV"]
    adjective = [token.text for token in doc if token.pos_ == "ADJ"]

    pos_questions = []
    if proper_noun:
        if "PERSON" in [ent.label_ for ent in doc.ents]:
            pos_questions.append(f"Who is {proper_noun[0]}? How is {proper_noun[0]} related to the topic?")
        else:
            pos_questions.append(f"What is {proper_noun[0]}? Can you explain how {proper_noun[0]} works?")
    if common_noun:
        pos_questions.append(f"What is {common_noun[0]}? Can you explain how {common_noun[0]} works?")
    if main_verb:
        pos_questions.append(f"What does {main_verb[0]} mean?")
    if adverb:
        pos_questions.append(f"How does the action happen in the sentence? Use the adverb '{adverb[0]}' to explain.")
    if adjective:
        pos_questions.append(f"Describe the {common_noun[0]} using the adjective '{adjective[0]}'.")

    if not pos_questions:
        pos_questions.append("What is the main idea of the sentence?")

    # cyberTitans- NER
    ner_questions = []
    for ent in doc.ents:
        if ent.label_ == "PERSON":
            ner_questions.append(f"Who is {ent.text}?")
        elif ent.label_ == "ORG":
            ner_questions.append(f"What is {ent.text}?")
        

    if not ner_questions:
        ner_questions.append("What named entities are mentioned in the sentence?")

    return {
        "Dependency_Parsing": [dependency_question],
        "POS_Tagging": pos_questions,
        "NER": ner_questions
    }



def genQueFunc(sentence):
    # sentence = '''
    #     The Sahara Desert, spanning approximately 3.6 million square miles, is the world's largest hot desert. While often associated with vast stretches of sand dunes, the Sahara's landscape is diverse, featuring rocky plateaus, mountains, and occasional vegetation. Surprisingly, Antarctica, primarily known for its icy expanses, is the driest and windiest continent on Earth. With an average precipitation of merely 2 inches per year, it is technically classified as a desert. Moving to technological achievements, the International Space Station (ISS) orbits the Earth at an average speed of about 28,000 kilometers per hour, allowing it to complete one orbit roughly every 90 minutes. This remarkable spacecraft serves as a microgravity and space environment research laboratory, hosting scientific experiments from countries around the world. In the realm of biodiversity, the Amazon Rainforest is home to an astonishing array of plant and animal species, with estimates suggesting that it houses about 390 billion individual trees representing over 16,000 different species. These facts highlight the incredible diversity and fascinating characteristics found within some of the Earth's most iconic natural and technological features.
    # '''

    questions = generate_questions_pipeline(sentence)

    for category, category_questions in questions.items():
        # print(f"{category} Questions:")
        for question in category_questions:
            return question