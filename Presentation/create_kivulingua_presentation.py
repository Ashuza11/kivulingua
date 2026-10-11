from pathlib import Path

from pptx import Presentation
from pptx.dml.color import RGBColor
from pptx.enum.shapes import MSO_SHAPE
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.util import Inches, Pt


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "Presentation" / "KivuLingua_Initiative_Presentation.pptx"
LOGO = ROOT / "public" / "kivulinguaai_logo.svg"
ROADMAP = ROOT / "Presentation" / "Roadmap.PNG"
TEAM_IMAGES = [
    ROOT / "public" / "Team" / "ashuza.jpeg",
    ROOT / "public" / "Team" / "ciruza.jfif",
    ROOT / "public" / "Team" / "Marius.png",
]

TEAL = RGBColor(59, 125, 145)
GOLD = RGBColor(212, 165, 116)
INK = RGBColor(26, 26, 26)
MUTED = RGBColor(95, 95, 95)
CREAM = RGBColor(248, 245, 240)
WHITE = RGBColor(255, 255, 255)
PALE_TEAL = RGBColor(232, 242, 244)
PALE_GOLD = RGBColor(247, 238, 227)


prs = Presentation()
prs.slide_width = Inches(13.333)
prs.slide_height = Inches(7.5)


def add_bg(slide, color=CREAM):
    shape = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, prs.slide_width, prs.slide_height)
    shape.fill.solid()
    shape.fill.fore_color.rgb = color
    shape.line.fill.background()
    slide.shapes._spTree.remove(shape._element)
    slide.shapes._spTree.insert(2, shape._element)


def add_text(slide, text, x, y, w, h, size=24, color=INK, bold=False,
             align=PP_ALIGN.LEFT, font="Aptos", valign=MSO_ANCHOR.TOP):
    box = slide.shapes.add_textbox(Inches(x), Inches(y), Inches(w), Inches(h))
    frame = box.text_frame
    frame.clear()
    frame.word_wrap = True
    frame.vertical_anchor = valign
    p = frame.paragraphs[0]
    p.text = text
    p.alignment = align
    p.font.name = font
    p.font.size = Pt(size)
    p.font.bold = bold
    p.font.color.rgb = color
    return box


def add_title(slide, title, kicker=None):
    if kicker:
        add_text(slide, kicker.upper(), 0.7, 0.42, 8, 0.35, 11, TEAL, True)
    add_text(slide, title, 0.7, 0.78 if kicker else 0.5, 11.9, 0.7, 30, INK, True)
    bar = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.7), Inches(1.48), Inches(1.05), Inches(0.07))
    bar.fill.solid()
    bar.fill.fore_color.rgb = GOLD
    bar.line.fill.background()


def add_footer(slide, number):
    add_text(slide, "KivuLingua AI", 0.7, 7.08, 2.0, 0.2, 9, MUTED)
    add_text(slide, str(number), 12.1, 7.05, 0.45, 0.25, 9, MUTED, align=PP_ALIGN.RIGHT)


def add_card(slide, x, y, w, h, title, body, accent=TEAL):
    card = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(x), Inches(y), Inches(w), Inches(h))
    card.fill.solid()
    card.fill.fore_color.rgb = WHITE
    card.line.color.rgb = RGBColor(225, 225, 225)
    add_text(slide, title, x + 0.25, y + 0.22, w - 0.5, 0.42, 17, accent, True)
    add_text(slide, body, x + 0.25, y + 0.73, w - 0.5, h - 0.9, 13, INK)


def add_bullets(slide, items, x, y, w, h, size=19, color=INK):
    box = slide.shapes.add_textbox(Inches(x), Inches(y), Inches(w), Inches(h))
    frame = box.text_frame
    frame.clear()
    frame.word_wrap = True
    for idx, item in enumerate(items):
        p = frame.paragraphs[0] if idx == 0 else frame.add_paragraph()
        p.text = item
        p.level = 0
        p.font.name = "Aptos"
        p.font.size = Pt(size)
        p.font.color.rgb = color
        p.space_after = Pt(11)
        p.text = "• " + p.text
    return box


# Slide 1
slide = prs.slides.add_slide(prs.slide_layouts[6])
add_bg(slide)
add_text(slide, "KIVULINGUA AI", 0.8, 0.7, 5.5, 0.35, 13, TEAL, True)
add_text(slide, "Language technology\nrooted in community", 0.8, 1.35, 7.4, 1.75, 38, INK, True)
add_text(slide, "Preserving Mashi and building practical speech tools for Eastern Congo", 0.82, 3.35, 6.7, 0.9, 21, MUTED)
add_text(slide, "kivulinguaai.org", 0.82, 5.55, 3.5, 0.4, 17, TEAL, True)
shape = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(8.6), Inches(0.75), Inches(4.0), Inches(5.9))
shape.fill.solid(); shape.fill.fore_color.rgb = TEAL; shape.line.fill.background()
add_text(slide, "MASHI\nFIRST", 9.0, 2.0, 3.2, 1.4, 34, WHITE, True, PP_ALIGN.CENTER, valign=MSO_ANCHOR.MIDDLE)
add_text(slide, "Community voice\nCommunity ownership\nUseful local tools", 9.1, 4.0, 3.0, 1.25, 17, WHITE, align=PP_ALIGN.CENTER)
add_footer(slide, 1)

# Slide 2
slide = prs.slides.add_slide(prs.slide_layouts[6]); add_bg(slide); add_title(slide, "The initiative and its goal", "Why KivuLingua")
add_card(slide, 0.7, 1.85, 3.8, 3.95, "The challenge", "Mashi and many Eastern Congo languages have little high quality digital speech data. This limits access to voice technology, education tools, and local digital services.", TEAL)
add_card(slide, 4.78, 1.85, 3.8, 3.95, "Our response", "Build ethical, community governed speech resources and practical tools for automatic speech recognition and text to speech.", GOLD)
add_card(slide, 8.86, 1.85, 3.8, 3.95, "Long term goal", "Create reusable language infrastructure that communities can own, validate, and expand across Eastern Congo.", TEAL)
add_text(slide, "Website and domain: kivulinguaai.org", 0.7, 6.35, 6.8, 0.4, 16, TEAL, True)
add_footer(slide, 2)

# Slide 3
slide = prs.slides.add_slide(prs.slide_layouts[6]); add_bg(slide); add_title(slide, "Mashi, also called Shi", "First target language")
add_text(slide, "Why start with Mashi?", 0.8, 1.95, 4.4, 0.45, 22, INK, True)
add_bullets(slide, [
    "A major language of the Bushi region",
    "Native speaker and cultural community support already exists",
    "Local validation and transcription capacity is available",
    "A practical starting point for ASR and TTS development",
], 0.8, 2.5, 6.0, 3.6, 18)
box = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(7.3), Inches(1.8), Inches(5.3), Inches(4.7))
box.fill.solid(); box.fill.fore_color.rgb = PALE_TEAL; box.line.color.rgb = TEAL
add_text(slide, "Expansion path", 7.75, 2.25, 4.3, 0.5, 23, TEAL, True, PP_ALIGN.CENTER)
add_text(slide, "Mashi provides the method, governance model, and technical foundation that can later support other Kivu languages.", 7.82, 3.0, 4.15, 1.4, 18, INK, align=PP_ALIGN.CENTER, valign=MSO_ANCHOR.MIDDLE)
add_text(slide, "Start focused. Learn locally. Scale responsibly.", 7.85, 5.2, 4.1, 0.6, 16, GOLD, True, PP_ALIGN.CENTER)
add_footer(slide, 3)

# Slide 4
slide = prs.slides.add_slide(prs.slide_layouts[6]); add_bg(slide); add_title(slide, "Our approach: datafication", "Infrastructure before annotation")
add_text(slide, "We build tools that communities use in real life. As people use the tools, they help generate useful language data themselves.", 0.8, 1.85, 11.7, 0.95, 22, INK, True, PP_ALIGN.CENTER)
add_card(slide, 0.8, 3.05, 3.7, 2.4, "Useful tools", "Education, culture, health, and communication tools designed around community needs.", TEAL)
add_card(slide, 4.82, 3.05, 3.7, 2.4, "Continuous data", "Speech and text data grows through normal use instead of one expensive collection campaign.", GOLD)
add_card(slide, 8.84, 3.05, 3.7, 2.4, "Community control", "Consent, validation, access rules, and benefits are governed with the language community.", TEAL)
citation = add_text(slide, "Based on Jean Louis Fendji Kedieng Ebongue, Beyond Dataset Creation: The Datafication Blind Spot in African AI Policy and a Framework for Addressing It, 2026.", 0.9, 6.05, 11.5, 0.65, 12, MUTED, align=PP_ALIGN.CENTER)
citation.text_frame.paragraphs[0].runs[0].hyperlink.address = "https://ssrn.com/abstract=6904955"
add_footer(slide, 4)

# Slide 5
slide = prs.slides.add_slide(prs.slide_layouts[6]); add_bg(slide); add_title(slide, "Community governance and validation", "New Commons Incubator")
add_text(slide, "New Commons Incubator for Indigenous Languages and Cultures: Governance and Protocol", 0.8, 1.8, 11.8, 0.65, 21, TEAL, True, PP_ALIGN.CENTER)
add_card(slide, 0.8, 2.75, 3.75, 2.7, "Community partners", "MASHI RHWAGANIRA\nNdaro Culture\nNative speakers and cultural custodians", TEAL)
add_card(slide, 4.8, 2.75, 3.75, 2.7, "Validation", "Communities review pronunciation, spelling, meaning, cultural context, and speaker representation.", GOLD)
add_card(slide, 8.8, 2.75, 3.75, 2.7, "Protocol", "Clear consent, representation, governance, access, attribution, and benefit sharing before wider release.", TEAL)
add_text(slide, "The community is not only a data source. It is a decision maker and beneficiary.", 1.3, 6.05, 10.7, 0.5, 19, INK, True, PP_ALIGN.CENTER)
add_footer(slide, 5)

# Slide 6
slide = prs.slides.add_slide(prs.slide_layouts[6]); add_bg(slide); add_title(slide, "What we already have", "Progress")
add_card(slide, 0.75, 1.8, 3.8, 1.8, "10 hours", "Mashi speech curated and organized as a starting corpus.", TEAL)
add_card(slide, 4.78, 1.8, 3.8, 1.8, "1.5 hours", "Speech transcribed and prepared for the first experiment.", GOLD)
add_card(slide, 8.81, 1.8, 3.8, 1.8, "First TTS model", "A Coqui TTS model was fine tuned as an early technical proof of concept.", TEAL)
add_text(slide, "Mashi TTS Bootstrap", 0.8, 4.25, 3.0, 0.45, 21, INK, True)
link_box = add_text(slide, "ashuza11.github.io/mashi-tts-bootstrap/docs/", 0.8, 4.85, 7.8, 0.45, 18, TEAL, True)
link_box.text_frame.paragraphs[0].runs[0].hyperlink.address = "https://ashuza11.github.io/mashi-tts-bootstrap/docs/"
add_text(slide, "Also available: the KivuLingua website, domain, project narrative, language priorities, team, and public roadmap.", 0.8, 5.65, 11.7, 0.65, 17, MUTED)
add_footer(slide, 6)

# Slide 7
slide = prs.slides.add_slide(prs.slide_layouts[6]); add_bg(slide); add_title(slide, "A multidisciplinary team", "People and partners")
add_text(slide, "Consortium", 0.75, 1.75, 3.0, 0.4, 20, TEAL, True)
add_bullets(slide, ["African STEM Resources Hub", "Kwetu Best Technologies SARL"], 0.75, 2.2, 4.2, 1.4, 17)
add_text(slide, "Core team", 5.0, 1.75, 3.0, 0.4, 20, GOLD, True)
add_bullets(slide, [
    "Muhigiri Ashuza Albin: AI, partnerships, grants, project management",
    "David Krame: research and model optimization",
    "Victoria Chasi: data governance and policy",
    "Ciruza Alain: AI architecture and ML infrastructure",
    "Marius Nshombo: Mashi language validation",
    "Prof. Gervais Chirhalwirwha Nkunzimwami: linguistic and community advice",
    "Aristide Chiza: project operations",
    "Dr. Abednego Wamuhindo Kambale: edge AI",
    "Dr. Joaquim Mbasa: data architecture",
], 5.0, 2.2, 7.5, 4.5, 13)
add_footer(slide, 7)

# Slide 8
slide = prs.slides.add_slide(prs.slide_layouts[6]); add_bg(slide); add_title(slide, "Roadmap", "Four connected phases")
slide.shapes.add_picture(str(ROADMAP), Inches(0.75), Inches(1.75), width=Inches(11.85), height=Inches(3.92))
add_text(slide, "Governance setup", 0.8, 5.95, 2.7, 0.35, 14, TEAL, True, PP_ALIGN.CENTER)
add_text(slide, "Data collection", 3.75, 5.95, 2.7, 0.35, 14, GOLD, True, PP_ALIGN.CENTER)
add_text(slide, "Model development", 6.85, 5.95, 2.7, 0.35, 14, TEAL, True, PP_ALIGN.CENTER)
add_text(slide, "Impact and scale", 9.9, 5.95, 2.7, 0.35, 14, TEAL, True, PP_ALIGN.CENTER)
add_footer(slide, 8)

# Slide 9
slide = prs.slides.add_slide(prs.slide_layouts[6]); add_bg(slide); add_title(slide, "The next milestone", "Now")
panel = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(1.8), Inches(11.7), Inches(3.1))
panel.fill.solid(); panel.fill.fore_color.rgb = PALE_GOLD; panel.line.color.rgb = GOLD
add_text(slide, "Expand to 8 to 10 hours of well transcribed and annotated Mashi speech", 1.35, 2.25, 10.6, 1.0, 30, INK, True, PP_ALIGN.CENTER, valign=MSO_ANCHOR.MIDDLE)
add_text(slide, "The dataset will be prepared for both TTS and ASR fine tuning.", 1.45, 3.65, 10.4, 0.6, 21, TEAL, True, PP_ALIGN.CENTER)
add_bullets(slide, [
    "Complete transcription and annotation quality checks",
    "Validate language and representation with community partners",
    "Fine tune and evaluate Mashi TTS and ASR models",
], 2.0, 5.25, 9.4, 1.3, 17)
add_footer(slide, 9)

# Add source URLs to slide notes is not supported consistently by python-pptx,
# so the citations are included visibly in the relevant slides.
prs.save(OUT)
print(OUT)
