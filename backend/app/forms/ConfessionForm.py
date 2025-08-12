from app.models.ConfessionModel import Confessions
from django import forms

class ConfessionForm(forms.ModelForm):
    content = forms.CharField(
        strip=False,
        widget=forms.Textarea(attrs={
            "class": "form-control",
            "placeholder": "Write whatever you want...."
        })
    )

    class Meta:
        model = Confessions
        fields = ["content"]
