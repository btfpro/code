<?php
include("navcal/common.inc");
?>
<!-- Navigation Calendars -->
	<table width="100%">
		<tr>
			<td width="33%"></td>
			<td width="25%">
				<table>
					<tr>
						<td width="2">&nbsp;</td><td>
						<?php include("navcal/navcal_core.inc"); ?>
						</td>
					</tr>
				</table>
			</td>
			<?php if($motd) include("navcal/motd.inc"); ?>
		</tr>
	</table>
<!-- End Navigation Calendars -->

<?php
// vim:ai:ts=4:sw=4:filetype=php
?>
