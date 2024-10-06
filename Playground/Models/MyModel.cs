using System.ComponentModel.DataAnnotations;

namespace Playground.Models
{
    public class MyModel
    {
        [Required(ErrorMessage = "入力してください。")]
        public string InputText { get; set; } = string.Empty;

		[Required(ErrorMessage = "入力してください。")]
		public string InputTextArea { get; set; } = string.Empty;

		[Required(ErrorMessage = "入力してください。")]
		public bool Checkbox { get; set; } = false;
	}
}
